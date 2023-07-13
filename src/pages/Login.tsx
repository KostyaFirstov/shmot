import React from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import { Link, Navigate } from 'react-router-dom'
import { useAppDispatch } from '../redux/store'
import { fetchAuth, selectErrorAuth, selectIsAuth } from '../redux/slices/auth'
import { useSelector } from 'react-redux'
import ContentLayout from '../layouts/ContentLayout'

type Inputs = {
	email: string
	password: string
	signed: boolean
}

const Login = () => {
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
			email: '',
			password: ''
		},
		mode: 'onSubmit'
	})

	const onSubmit: SubmitHandler<Inputs> = async data => {
		const loginData = {
			email: data.email,
			password: data.password
		}
		dispatch(fetchAuth(loginData))
	}

	if (isAuth) {
		return <Navigate to='/' />
	}

	return (
		<div className='form'>
			<ContentLayout>
				<div className='form__title'>
					<h1>Вход</h1>
				</div>
				<div className='form__wrapper'>
					<form onSubmit={handleSubmit(onSubmit)}>
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
								{...register('password', { required: 'Укажите пароль' })}
							/>
							{errors.password && (
								<div className='form__error'>Не указан пароль</div>
							)}
						</div>
						{errorAuth && (
							<div className='error form__error-main'>{errorAuth}</div>
						)}
						<button className='form__button button button-black'>Войти</button>
					</form>
				</div>
				<div className='form__desc'>
					<span>
						Нет аккаунта? <br /> <Link to='/register'>Зарегистрироваться</Link>
					</span>
				</div>
			</ContentLayout>
		</div>
	)
}

export default Login
