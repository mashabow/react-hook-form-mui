import {
  Control,
  FieldError,
  FieldPath,
  FieldValues,
  useController,
  UseControllerProps,
} from 'react-hook-form'
import {
  FormControl,
  FormControlProps,
  FormHelperText,
  FormLabel,
  Slider,
  SliderProps,
} from '@mui/material'
import {useFormError} from './FormErrorProvider'
import {forwardRef, ReactNode, Ref, RefAttributes} from 'react'

export type SliderElementProps<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
> = Omit<SliderProps, 'control'> & {
  name: TName
  control?: Control<TFieldValues>
  label?: string
  rules?: UseControllerProps<TFieldValues, TName>['rules']
  parseError?: (error: FieldError) => ReactNode
  required?: boolean
  formControlProps?: FormControlProps
}

type SliderElementComponent = <
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
>(
  props: SliderElementProps<TFieldValues, TName> & RefAttributes<HTMLDivElement>
) => JSX.Element

const SliderElement = forwardRef(function SliderElement<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
>(
  props: SliderElementProps<TFieldValues, TName>,
  ref: Ref<HTMLDivElement>
): JSX.Element {
  const {
    name,
    control,
    label,
    rules = {},
    parseError,
    required,
    formControlProps,
    ...other
  } = props

  const errorMsgFn = useFormError()
  const customErrorFn = parseError || errorMsgFn

  const validationRules = {
    ...rules,
    ...(required &&
      !rules.required && {
        required: 'This field is required',
      }),
  }

  const {
    field,
    fieldState: {error, invalid},
  } = useController({
    name,
    control,
    disabled: other.disabled,
    rules: validationRules,
  })

  const parsedHelperText = error
    ? typeof customErrorFn === 'function'
      ? customErrorFn(error)
      : error.message
    : null

  return (
    <FormControl
      error={invalid}
      required={required}
      fullWidth
      {...formControlProps}
      ref={ref}
    >
      {label && (
        <FormLabel component="legend" error={invalid}>
          {label}
        </FormLabel>
      )}
      <Slider
        {...other}
        value={field.value}
        onChange={field.onChange}
        valueLabelDisplay={other.valueLabelDisplay || 'auto'}
      />
      {parsedHelperText && (
        <FormHelperText error={invalid}>{parsedHelperText}</FormHelperText>
      )}
    </FormControl>
  )
})
SliderElement.displayName = 'SliderElement'

export default SliderElement as SliderElementComponent
