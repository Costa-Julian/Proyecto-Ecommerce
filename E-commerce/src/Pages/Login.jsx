import { useState } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { Toaster, toast } from 'sonner';

const Login = ({ users, setUserLogged }) => {
    const Navigate = useNavigate();

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        const user = users.find(user => user.username === username && user.password === password);
        if (user) {
            console.log(user)
            setUserLogged(user);
            console.log('Inicio de sesión exitoso para', user.username);
            Navigate('/Home');
        } else {
            console.log('error');
            toast.error('Usuario o contraseña incorrectos');
        }
    };

    return (
        <section style={{ maxWidth:'90%', margin:'auto' }}>
            <div style={{display: 'flex', justifyContent: 'space-between', height: '80vh', gap:'30px'}}>
                <div style={{ width: '70%',height:'100%' }}>
                    <img
                        src='https://tn.com.ar/resizer/hUXhFFlalcdiR1nCtOg1-Zqq3D4=/767x0/smart/filters:format(webp)/cloudfront-us-east-1.images.arcpublishing.com/artear/YY4TGVG76NBFBJEXGEM3FQ3NMU.jpg'
                        alt='Imagen'
                        style={{ paddingBottom:'20px' ,width: '100%', height: '100%', objectFit: 'cover', borderRadius: '8px' }}
                    />
                </div>
                <form style={{ width: '400px', height:'auto', marginTop:'40px', padding: '20px', borderRadius: '8px' }} onSubmit={handleSubmit}>
                    <Toaster richColors />

                    <h2 style={{marginBottom:'20px'}}>Bueno tenerte devuelta</h2>

                    <div style={{ marginBottom: '2rem' }}>
                        <label htmlFor="username" style={{ marginBottom: '1rem', fontSize: '1.25rem', fontWeight: '500', color: '#4B5563' }}>Username</label>
                        <input
                            type="text"
                            id="username"
                            style={{ backgroundColor: '#E5E7EB', border: '1px solid #D1D5DB', color: '#1F2937', fontSize: '1rem', padding: '10px', borderRadius: '0.5rem', width: '100%' }}
                            placeholder="Username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                        />
                    </div>
                    <div style={{ marginBottom: '2rem' }}>
                        <label htmlFor="password" style={{ marginBottom: '1rem', fontSize: '1.25rem', fontWeight: '500', color: '#4B5563' }}>Password</label>
                        <input
                            type="password"
                            id="password"
                            style={{ backgroundColor: '#E5E7EB', border: '1px solid #D1D5DB', color: '#1F2937', fontSize: '1rem', padding: '10px', borderRadius: '0.5rem', width: '100%' }}
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        style={{  color: '#FFFFFF', fontSize: '14px', padding: '10px', borderRadius: '0.5rem', width: '100%', cursor: 'pointer' }}
                        className='primary-btn'
                    >
                        Iniciar sesión
                    </button>
                    <div style={{width:'100%', display:'flex', gap:'10px', marginTop:'20px', justifyContent:'center'}}>
                        <p style={{fontSize:'16px', color:'gray'}}>No tengo cuenta</p>
                        <Link to='/signup' style={{fontSize:'16px', color:'#6e9cc3', fontWeight:'600'}} >Registrarme</Link>
                    </div>
                </form>
            </div>

        </section>
    );
};

export default Login;
