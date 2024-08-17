import { IsEmail, IsNotEmpty, IsString, MinLength } from 'class-validator';

export class CreateUserDto {
  @IsEmail({}, { message: 'Vous devez fournir une adresse email valide.' })
  email: string;

  @IsString({ message: 'Vous devez fournir un prénom.' })
  firstname: string;

  @IsNotEmpty()
  @MinLength(6, {
    message: 'Votre mot de passe doit faire plus de 6 caractères.',
  })
  password: string;
}
