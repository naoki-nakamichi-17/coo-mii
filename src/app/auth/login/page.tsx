"use client";

import Button from '@/app/features/auth/components/Button'
import InputField from '@/app/features/auth/components/InputField'
import { useLoginForm } from '@/app/features/auth/hooks/useLoginForms';
import Link from 'next/link';

const Login = () => {
  const { form, onSubmit } = useLoginForm();
  return (
    <div className='mx-auto max-w-sm my-14'>
      <h2 className='text-center font-medium text-2xl mb-4'>
        ログイン
      </h2>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <InputField
          name={'email'}
          type={'email'}
          label={'メールアドレス'}
          placeholder={'メールアドレス'}
          register={form.register}
        />
        {form.formState.errors.email && (
          <p className='text-red-500'>
            {form.formState.errors.email?.message}
          </p>
        )}
        <InputField
          name={'password'}
          type={'password'}
          label={'パスワード'}
          placeholder={'パスワード'}
          register={form.register}
        />
        {form.formState.errors.password && (
          <p className='text-red-500'>
            {form.formState.errors.password?.message}
          </p>
        )}
        <div className='mt-4'>
          <Button type='submit' colorClass='bg-blue-500 hover:bg-blue-500'>
            ログイン
          </Button>
        </div>
      </form>
      <Link href="/auth/signup" className="mt-4 block text-center text-blue-400">
        初めてご利用の方はこちら
      </Link>
    </div>
  )
}

export default Login
