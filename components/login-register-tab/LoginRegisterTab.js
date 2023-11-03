import React, { useState } from 'react';
import Link from "next/link"
import { useRouter } from 'next/router'

export default function LoginRegisterTab() {

    const router = useRouter();
    const pathName = router.pathname;
    return (
        <div>
            <div className="custom-login-register-tabs left text-center mb-5">
                <Link href="/login" className={`custom-login-register-tabs-switch text-white text-decoration-none ${pathName == '/login' ? 'active' : ''}`}>Login</Link>
                <Link href="/register" className={`custom-login-register-tabs-switch text-white text-decoration-none ${pathName == '/register' ? 'active' : ''}`}>Register</Link>
            </div>
        </div>
    )
}
