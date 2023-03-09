import { type NextPage } from 'next';
import { Form } from '~/components/ui';

const Setup: NextPage = () => {
  return (
    <div className='mx-auto flex w-full max-w-screen-xl items-center justify-center'>
      <Form>
        <Form.Container>
          <Form.Header>
            <Form.Title>Let&apos;s get started!</Form.Title>
            <Form.Description>
              You can customize your page with links and content embed.
            </Form.Description>
          </Form.Header>

          <Form.Items>
            <div className='flex space-x-4'>
              <div className='h-[72px] w-full max-w-[72px] rounded-full bg-gray-300' />
              <Form.Field name='name'>
                <Form.LabelWrapper>
                  <Form.Label>Name</Form.Label>
                  <Form.Message match='valueMissing'>
                    Please provide a name
                  </Form.Message>
                </Form.LabelWrapper>
                <Form.Input type='text' placeholder='First Last' required />
              </Form.Field>
            </div>

            <Form.Field name='bio'>
              <Form.LabelWrapper>
                <Form.Label>Bio</Form.Label>
              </Form.LabelWrapper>
              <Form.Textarea
                className='max-h-28 min-h-[60px] w-full'
                placeholder='UI/UX Designer'
              />
            </Form.Field>
          </Form.Items>
          <Form.Button>Continue</Form.Button>
        </Form.Container>
      </Form>
    </div>
  );
};

export default Setup;
