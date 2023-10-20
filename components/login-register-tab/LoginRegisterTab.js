import React, { useState } from 'react';
import Link from "next/link"
import { useRouter } from 'next/router'

export default function LoginRegisterTab() {

    const router = useRouter();
    const pathName = router.pathname;
    return (
        <div>
            <div className="custom-login-register-tabs left text-center mb-5">
                <Link href="/Login" className={`custom-login-register-tabs-switch text-white text-decoration-none ${pathName == '/Login' ? 'active' : ''}`}>Login</Link>
                <Link href="/Register" className={`custom-login-register-tabs-switch text-white text-decoration-none ${pathName == '/Register' ? 'active' : ''}`}>Register</Link>
            </div>
        </div>
    )
}
