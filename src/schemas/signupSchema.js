import * as yup from 'yup'

const passwordRegEx = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/

export const signupSchema = yup.object().shape({
  firstName: yup
    .string()
    .min(4, 'Minimum 4 simvol teleb olunur')
    .max(15, 'Maximum 15 simbol olamlidir')
    .matches(/^[^\d]+$/, 'Ad-da rəqəm ola bilməz.')
    .required('Ad Tələb olunur'),
  lastName: yup
    .string('Ancaq hərf tələb olunur')
    .min(4, 'Minimum 4 simvol teleb olunur')
    .max(15, 'Maximum 15 simbol olamlidir')
    .matches(/^[^\d]+$/, 'Soyad-da rəqəm ola bilməz.')
    .required('Soyad Tələb olunur'),
  email: yup
    .string()
    .email('Zəhmət olmasa düzgün Email daxil edin')
    .required('Email tələb olunur'),
  password: yup
    .string()
    .min(5, 'Minimum 5 simvol teleb olunur')
    .max(16, 'Maximum 15 simbol olamlidir')
    .matches(
      passwordRegEx,
      'Parolunuz ən az bir böyük hərf, bir kiçik hərf və bir rəqəm olması tələb olunur'
    )
    .required('Parol Tələb olunur'),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password')], 'Password-nan eyni olması tələb olunur')
    .required('Parolu təsdiq etmek tələb olunur')
})
