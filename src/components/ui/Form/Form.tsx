import FormButton from './FormButton';
import FormContainer from './FormContainer';
import FormDescription from './FormDescription';
import FormGitHubButton from './FormGitHubButton';
import FormGoogleButton from './FormGoogleButton';
import FormHeader from './FormHeader';
import FormInput from './FormInput';
import FormInputWrapper from './FormInputWrapper';
import FormItems from './FormItems';
import FormLabel from './FormLabel';
import FormOrDivider from './FormOrDivider';
import FormTitle from './FormTitle';

type Props = {
  children: React.ReactNode;
};

const Form = ({ children }: Props) => {
  return (
    <form className='mx-auto w-full max-w-md rounded-lg border border-gray-600 p-6'>
      {children}
    </form>
  );
};

Form.Container = FormContainer;
Form.Header = FormHeader;
Form.Title = FormTitle;
Form.Description = FormDescription;
Form.Items = FormItems;
Form.InputWrapper = FormInputWrapper;
Form.Label = FormLabel;
Form.Input = FormInput;
Form.Button = FormButton;
Form.OrDivider = FormOrDivider;
Form.GoogleButton = FormGoogleButton;
Form.GitHubButton = FormGitHubButton;

export default Form;
