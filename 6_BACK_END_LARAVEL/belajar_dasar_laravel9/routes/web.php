<?php

use Illuminate\Support\Facades\Route;
// use App\Http\Controllers\HelloController;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\PostController;


/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

/* Contoh Penggunaan Route */
/* Route::get('hello', function (){
    // $ping = ['ping' => "Pong"];
    // return $ping;

    return view('hello');
    // return view('ping');
});  */

// Route::get('hello', 'App\Http\Controllers\HelloController@index');

// Pakai Route Array Dimana Ada alamat router, controller, kemudian ada sebuah function method
/*
   Route::get('hello', [HelloController::class, 'index']);
   Route::post('hello', [HelloController::class, 'create']);
   ROute::get('world', [HelloController::class, 'world_message']);
*/ 

/* Proses Authentication Login */
Route::get('login', [AuthController::class, 'login']);
Route::post('login', [AuthController::class, 'authenticate']);

/* Baru ininya redirect ke method logout */
Route::get('logout', [AuthController::class, 'logoutBerhasil']);

/* Registrasi */
Route::get('registrasi', [AuthController::class, 'register_form']);
Route::post('registrasi', [AuthController::class, 'register']);



// Controller Resource 
// Route::resource('posts', PostController::class);
Route::post('postsData', [PostController::class, 'store']);
Route::get('postsData', [PostController::class, 'index']);
// Menampilkan Formulir
Route::get('postsData/create', [PostController::class, 'create']);

// Harus Dipindahkan Kebawah Kalo id
Route::get('postsData/{id}', [PostController::class, 'show']);


// Untuk Mengubah Postingan Dan Proses Pengubahan Datanya
Route::get('postsData/{id}/edit', [PostController::class, 'edit']);
Route::patch('postsData/{id}', [PostController::class, 'update']);
Route::delete('postsData/{id}', [PostController::class, 'destroy']);
