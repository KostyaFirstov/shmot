import React from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import { Link, Navigate } from 'react-router-dom'
import { useAppDispatch } from '../redux/store'
import { useSelector } from 'react-redux'
import {
	fetchAuthRegister,
	selectErrorAuth,
	selectIsAuth
} from '../redux/slices/auth'
import ContentLayout from '../layouts/ContentLayout'

type Inputs = {
	username: string
	email: string
	password: string
}

const Register = () => {
	const dispatch = useAppDispatch()
	const isAuth = useSelector(selectIsAuth)
	const errorAuth = useSelector(selectErrorAuth)
	const {
		register,
		handleSubmit,
		setError,
		formState: { errors, isValid }
	} = useForm<Inputs>({
		defaultValues: {
			username: '',
			email: '',
			password: ''
		},
		mode: 'onSubmit'
	})

	const onSubmit: SubmitHandler<Inputs> = data => {
		dispatch(fetchAuthRegister(data))
	}

	if (isAuth) {
		return <Navigate to='/' />
	}

	return (
		<div className='form'>
			<ContentLayout>
				<div className='form__title'>
					<h1>Регистрация</h1>
				</div>
				<div className='form__wrapper'>
					<form onSubmit={handleSubmit(onSubmit)}>
						<div className='form__input'>
							<input
								className={errors.username && 'error'}
								type='text'
								placeholder='Имя'
								{...register('username', {
									required: 'Укажите имя',
									minLength: 2
								})}
							/>
							{errors.username && (
								<div className='form__error'>
									Имя должно быть длинее 2 символов
								</div>
							)}
						</div>
						<div className='form__input'>
							<input
								className={errors.email && 'error'}
								type='text'
								placeholder='E-mail'
								{...register('email', {
									required: 'Укажите почту',
									pattern:
										/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
								})}
							/>
							{errors.email && (
								<div className='form__error'>Почта указана некорректно</div>
							)}
						</div>
						<div className='form__input'>
							<input
								className={errors.password && 'error'}
								type='password'
								placeholder='Пароль'
								{...register('password', {
									required: 'Укажите пароль',
									minLength: 7,
									pattern: /^[A-Z0-9_-]{7,22}$/i
								})}
							/>
							{errors.password && (
								<div className='form__error'>
									Пароль должен быть от 7 до 22 символов и латиница
								</div>
							)}
						</div>
						<button className='form__button button button-black'>
							Зарегистрироваться
						</button>
					</form>
				</div>
				<div className='form__desc'>
					<span>
						Уже есть аккаунт? <br /> <Link to='/login'>Войти</Link>
					</span>
				</div>
			</ContentLayout>
		</div>
	)
}

export default Register
