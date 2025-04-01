import { IsString, IsNotEmpty } from 'class-validator';

export class AnalyzerCodeDto {
  @IsString()
  @IsNotEmpty({ message: 'Input code is not empty' })
  code: string;
}
