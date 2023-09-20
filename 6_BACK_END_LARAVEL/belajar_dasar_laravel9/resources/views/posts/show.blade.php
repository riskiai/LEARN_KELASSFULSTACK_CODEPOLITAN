@extends('layouts.app')

@section('title', "Judul: $post->title") {{-- Menyesuaikan Dengan Judul Slugnya --}}

@section('content')
        <article class="blog-post">
            <h2 class="blog-post-title mb-1">{{ $post->title }}</h2>
            <p class="blog-post-meta">{{ date("d M Y H:i", strtotime($post->created_at)) }} </p>
    
            <p>{{ $post->content}}</p>

            {{-- Menghitung Banyaknya Data Comment --}}
            {{-- Langsung Menambahkan Banyaknya Coment Juga Bisa --}}
            {{-- <small class="text-muted">{{ count($comments) }} Komentar</small> --}}

            {{-- Menambahkan Data Relasi Tapi Dengan Membaut Functionnya Terlebih Dahulu --}}
            <small class="text-muted">{{ $total_comments }} Komentar</small>       

            {{-- Menampilkan Data Relasi --}}
            {{-- Instant Comments manggil datanya langsung --}}
            @foreach($comments as $comment)
                <div class="card mb-3">
                    <div class="card-body">
                        <p style="font-size:10pt">{{ $comment->comment }}</p>
                    </div>
                </div>
            @endforeach


            {{-- Melakukan Kembali ke halaman route yang sudah didefenisikan --}}
            <a href="{{ url("postsData") }}">< Kembali</a>
          </article>
 
@endsection