import { Root as RadixForm, type FormProps } from '@radix-ui/react-form';

import FormButton from './FormButton';
import FormContainer from './FormContainer';
import FormDescription from './FormDescription';
import FormField from './FormField';
import FormGitHubButton from './FormGitHubButton';
import FormGoogleButton from './FormGoogleButton';
import FormHeader from './FormHeader';
import FormInput from './FormInput';
import FormItems from './FormItems';
import FormLabel from './FormLabel';
import FormLabelWrapper from './FormLabelWrapper';
import FormMessage from './FormMessage';
import FormOrDivider from './FormOrDivider';
import FormSecondaryButton from './FormSecondaryButton';
import FormTextarea from './FormTextarea';
import FormTitle from './FormTitle';

interface Props extends FormProps {
  children: React.ReactNode;
}

const Form = ({ children, ...props }: Props) => {
  return (
    <RadixForm
      className='mx-auto w-full max-w-md rounded-lg border border-gray-600 p-6'
      {...props}
    >
      {children}
    </RadixForm>
  );
};

Form.Container = FormContainer;
Form.Header = FormHeader;
Form.Title = FormTitle;
Form.Description = FormDescription;
Form.Items = FormItems;
Form.Field = FormField;
Form.LabelWrapper = FormLabelWrapper;
Form.Label = FormLabel;
Form.Message = FormMessage;
Form.Input = FormInput;
Form.Textarea = FormTextarea;
Form.Button = FormButton;
Form.SecondaryButton = FormSecondaryButton;
Form.OrDivider = FormOrDivider;
Form.GoogleButton = FormGoogleButton;
Form.GitHubButton = FormGitHubButton;

export default Form;
