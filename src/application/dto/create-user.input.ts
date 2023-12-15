import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateUserInput {
  @Field(() => String, { description: 'Example field (user name)' })
  name: string;

  @Field(() => String, { description: 'Example field (user e-mail)' })
  email: string;
}
