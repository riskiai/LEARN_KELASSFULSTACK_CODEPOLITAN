<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Session;
// use Session;

class AuthController extends Controller
{
    // Bikin function method login
    public function login()
    {
        return view('auth.login');
    }

    public function authenticate(Request $request)
    {
        /* Dapatkan Datanya Dulu Kemudian */
        /* Proses Validasi */
        $credenticals = $request->only('email', 'password');
        if (Auth::attempt($credenticals)) {
            return redirect('postsData');
        } else {
            return redirect('login')->with('error_message', 'Wrong Email or password to login');
        }
    }

    public function logoutBerhasil()
    {
        Session::flush();
        Auth::logout();

        /* Derect ke halaman views login.blade.php */
        return redirect('login');
    }

    /* Registrasi Form */
    /* Method Penamaan Di Sesuai Route */
    // Method Getnya
    public function register_form()
    {
        return view('auth.register');
    }

    // Method Postnya
    public function register(Request $request)
    {
        /* Menambahkan Validasi Di Dalam Form Registrasi */
        $request->validate([
             'name' => 'required',
             'email' => 'required|email|unique:users',
             'password' => 'required|min:6|confirmed'       
        ]);

        /* Menambahkan Data Registrasi Ke Database */
        User::create([
            'name'  => $request->input('name'),
            'email' => $request->input('email'),
            'password' => Hash::make($request->input('password'))
        ]);

        /* Arahkan ke root login */
        return redirect('login');
    }
}
