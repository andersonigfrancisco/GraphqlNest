import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType()
export class User {
  @Field(() => String, { description: 'Example field (user id)' })
  id: string;
  @Field(() => String, { description: 'Example field (user name)' })
  name: string;
  @Field(() => String, { description: 'Example field (user e-mail)' })
  email: string;
}
