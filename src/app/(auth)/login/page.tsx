"use client";

import Link from 'next/link';
import InputField from '@/components/InputField';
import Button from '@/components/Button';
import { useLoginForm } from '@/hooks/useLoginForms';

const Login = () => {
  const { form, onSubmit } = useLoginForm();
  return (
    <div className='mx-auto max-w-sm my-14 w-full'>
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
      <Link href="/signup" className="mt-4 block text-center text-blue-400">
        初めてご利用の方はこちら
      </Link>
    </div>
  )
}

export default Login
