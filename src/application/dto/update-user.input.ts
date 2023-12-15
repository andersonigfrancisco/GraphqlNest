import { CreateUserInput } from './create-user.input';
import { InputType, Field, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateUserInput extends PartialType(CreateUserInput) {
  @Field(() => String, { description: 'Example field (user id)' })
  id: string;
  @Field(() => String, { description: 'Example field (user name)' })
  name: string;
  @Field(() => String, { description: 'Example field (user e-mail)' })
  email: string;
}
