<?php

namespace App\Http\Controllers;


use App\Mail\BlogPosted;
use App\Models\Post;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Storage;



class PostController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        // Menyimpan Data Ke Database dengan nama table posts
        /* "SELECT title, content FROM posts" */

        /* QUERY BUILDER */
        /*  $posts = DB::table('posts')
                ->select('id', 'title', 'content', 'created_at', 'updated_at')
                ->where('active', true)
                ->get();
        
        $view_data = [
            'posts' => $posts,
        ]; */


        /* Eloquent/ORM */
        /* $posts = Post::where('active', true)->get();
        $view_data = [
            'posts' => $posts,
        ]; */


        /* Untuk Melakukan Pengamanan Untuk Login */
        if(Auth::check()) {
            /* Jika Tidak Login Ke Tampilan Halaman Tersebut */
             // Jika Benar Datanya Masuk Ke Dashboard Blog
            $posts = Post::active()->limit(5)->get();
            $view_data = [
                'posts' => $posts,
            ];
            
            // Menuju Ke Redirect Ke file index.blade.php
            // . Adalah Penyambung Folder Dan File
            return view('posts.index', $view_data);
       
        }  else {
            return redirect('login');
        }
       
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
        /* Untuk Melakukan Pengamanan Untuk Login */
        if(!Auth::check()) {
            /* Jika Tidak Login Ke Tampilan Halaman Tersebut */
            return redirect('login');
        }  
        return view('posts.create');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    { 
        /* Untuk Melakukan Pengamanan Untuk Login */
        if(!Auth::check()) {
            /* Jika Tidak Login Ke Tampilan Halaman Tersebut */
            return redirect('login');
        }  

        // CSRF Gunanya Untuk Menyeleksi Menghubung Client Ke Server
        $title = $request->input('title');
        $content = $request->input('content');

        // Menyimpan data di database di Query Builder
        /*  DB::table('posts')->insert([
            'title' => $title,
            'content' => $content,
            'created_at' => date('Y-m-d H:i:s'),
            'updated_at' => date('Y-m-d H:i:s'),
        ]);
        */

        // Menyimpan data di database di Query Eloquent/ORM
        /* Post::insert([
            'title' => $title,
            'content' => $content,
            'created_at' => date('Y-m-d H:i:s'),
            'updated_at' => date('Y-m-d H:i:s'),
        ]); */

        // Mengirim data di database ORM TAPI Menggunakan Model Event
        // Serba Otomatis Menggunakan Event Atau Ke Triger
        $post = Post::create([
            'title' => $title,
            'content' => $content,
        ]);

        /* Untuk Mengirimkan Email */
        // Mail::to('admin@codepolitan.com')->send(new BlogPosted);
        /* Menerima Email Dari User Yang Login */
        Mail::to(Auth::user()->email)->send(new BlogPosted($post));

        $this->notify_telegram($post);

        // Mengirimkan kembali data ke data yang sudah ada ke index
        return redirect('postsData');


        /* Menyimpan data Di Internal  */
        /*  $posts = Storage::get('posts.txt');
        $posts = explode("\n", $posts);

        $new_post = [
            count($posts) + 1,
            $title,
            $content,
            date('Y-m-d H:i:s')
        ];

        // Menggabung Array To String
        // Kebalikan dari explode
        $new_post = implode(',', $new_post);

        // Kalo data sudah sesuai Maka masukan variable $new_post ke postingan yang sudah kita punya
        array_push($posts, $new_post);
        // Menggabungkan Data Menjadi Satu String
        $posts = implode("\n", $posts);

        // Ganti isi dari storage posts.txt KE data otomatis
        Storage::write('posts.txt', $posts); */
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //Ambil Data Dari Storage
        // Seperti QUERYNYA
        // SELECT ... FROM posts WHERE id = $id  
        /* Menggunakan Query Builder */
        /*  $post = DB::table('posts')
            ->select('id', 'title', 'content', 'created_at')
            ->where('id', '=', $id)
            ->first(); 
        */

        /* Untuk Melakukan Pengamanan Untuk Login */
        if(!Auth::check()) {
            /* Jika Tidak Login Ke Tampilan Halaman Tersebut */
            return redirect('login');
        }  

        /* Menggunakan Eloquent/ORM */
        $post = Post::where('id', '=', $id)->first();
        // Panggil Model Comments
        $comments = $post->comments()->limit(5)->get();
        // Inisiasi Function Method DI model Post
        $total_comments = $post->total_comments();

        $view_data = [
            'post' => $post,
            'comments' => $comments,
            'total_comments' => $total_comments,
        ];
        return view('posts.show', $view_data);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        /* Menggunakan Metode Query Builder */
        /* $post = DB::table('posts')
            ->select('id', 'title', 'content', 'created_at')
            ->where('id', '=', $id)
            ->first(); */

        /* Untuk Melakukan Pengamanan Untuk Login */
        if(!Auth::check()) {
            /* Jika Tidak Login Ke Tampilan Halaman Tersebut */
            return redirect('login');
        }  

        // Menggunakan ORM/ELOQUENT
        $post = Post::where('id', '=', $id)->first();

        $view_data = [
            'post' => $post
        ];
    
        return view('posts.edit', $view_data);
    }
    


    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        /* Untuk Melakukan Pengamanan Untuk Login */
        if(!Auth::check()) {
            /* Jika Tidak Login Ke Tampilan Halaman Tersebut */
            return redirect('login');
        }  
        
        // Update Data
        $title = $request->input('title');
        $content = $request->input('content');

        /* SEPERTI UPDATE ... WHERE id = $id */
        /* Menggunakan Query Builder */
        /*  DB::table('posts')
            ->where('id', '=', $id)
            ->update([
                'title' => $title,
                'content' => $content,
                'updated_at' => date('Y-m-d H:i:s',)
            ]); 
        */

        /* Menggunakan Eloquent/ORM */
        Post::where('id', '=', $id)
        ->update([
            'title' => $title,
            'content' => $content,
            'updated_at' => date('Y-m-d H:i:s',)
        ]);

        return redirect("postsData/{$id}");

    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        // Menghapus Data
        // Menggunakan Query Builder
        /* 
        DB::table('posts')
            ->where('id', $id)
            ->delete(); 
        */

        /* Untuk Melakukan Pengamanan Untuk Login */
        if(!Auth::check()) {
            /* Jika Tidak Login Ke Tampilan Halaman Tersebut */
            return redirect('login');
        }  
        
        // Menggunakan Eloquent/ORM
        Post::where('id', $id)->delete();
        return redirect('postsData');
    }

    // Membuat Untuk Notify Telegram
    private function notify_telegram($post)
    {
        /* Setup datanya */
        $api_token = "6424900378:AAF41rgsPfJD_hdlxhAhRt1TIfJS39Z0RQU";
        $url = "https://api.telegram.org/bot{$api_token}/sendMessage";
        $chat_id = -4082160014;
        $content = "Ada Postingan Baru Nih di Blog Kamu dengan Judul: <strong>\"{$post->title}\"</strong> ";

        /* Melakukan Print Data */
        $data = [
            'chat_id' => $chat_id,
            'text' => $content,
            'parse_mode' => "HTML"
        ]; 

        /* Adalah Sebuah Pengiriman Data Melalui Method HTTP */
        Http::post($url, $data);
    }
}
