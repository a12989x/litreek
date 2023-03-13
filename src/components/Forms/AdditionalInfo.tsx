import { type FormEventHandler, type MouseEventHandler } from 'react';

import { Form } from '~/components/ui';

type Props = {
  onSubmit: FormEventHandler<HTMLFormElement>;
  onGoBack?: MouseEventHandler<HTMLButtonElement> &
  MouseEventHandler<HTMLAnchorElement>;
};

const AdditionalInfo = ({ onSubmit, onGoBack }: Props) => {
  return (
    <Form onSubmit={onSubmit}>
      <Form.Container>
        <Form.Header>
          <Form.Title>Almost there!</Form.Title>
          <Form.Description>
            Please add your location and some social links.
          </Form.Description>
        </Form.Header>

        <Form.Items>
          <Form.Field name='instagram'>
            <Form.LabelWrapper>
              <Form.Label>Instagram</Form.Label>
            </Form.LabelWrapper>
            <Form.Input type='text' placeholder='codingcodax' />
          </Form.Field>

          <Form.Field name='twitter'>
            <Form.LabelWrapper>
              <Form.Label>Twitter</Form.Label>
            </Form.LabelWrapper>
            <Form.Input type='text' placeholder='shadcn' />
          </Form.Field>

          <Form.Field name='youtube'>
            <Form.LabelWrapper>
              <Form.Label>YouTube</Form.Label>
            </Form.LabelWrapper>
            <Form.Input type='text' placeholder='t3dotgg' />
          </Form.Field>

          <Form.Field name='linkedin'>
            <Form.LabelWrapper>
              <Form.Label>LinkedIn</Form.Label>
            </Form.LabelWrapper>
            <Form.Input type='text' placeholder='trushithanarla' />
          </Form.Field>
        </Form.Items>

        <Form.Items direction='horizontal'>
          <Form.SecondaryButton onClick={onGoBack}>
            Go back
          </Form.SecondaryButton>
          <Form.Button>Finalize</Form.Button>
        </Form.Items>
      </Form.Container>
    </Form>
  );
};

export default AdditionalInfo;
