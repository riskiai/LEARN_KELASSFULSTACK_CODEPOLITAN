{{-- Membungkus APP di folder layouts header dan footernya --}}

{{-- Untuk Memanggil File Pecahan --}}
@extends('layouts.app')

{{-- Menamakan Section Isinya --}}
@section('title')
    Blog App
@endsection

{{-- Menamkan Isi Bodynya --}}
@section('content')
        <h1>
            Blog Codepolitan
            <a href="{{ url('postsData/create') }}" class="btn btn-success">+ Buat Postingan</a>
        </h1>

        {{-- Tambahkan Increment --}}
        {{-- @php($number = 1) --}} {{-- Memulai Dari 1 --}}
        @foreach($posts as $post)
            {{-- @php($post = explode(",", $post)) --}}

            {{-- Menampilkan data dari database harus mengambil data databasenya --}}
            <div class="card mb-3">
                <div class="card-body">
                    <h5 class="card-title">{{ $post->title }}</h5>
                    <p class="card-text">{{ $post->content }} </p>
                    <p class="card-text"><small class="text-muted">Last updated at {{ date("d M Y H:i", strtotime($post->created_at)) }}</small></p>

                    {{-- URL NYA SESUAIKAN SAMA ROUTER --}}
                    <a href="{{ url("postsData/$post->id") }}" class="btn btn-primary">Selengkapnya</a>
                    <a href="{{ url("postsData/$post->id/edit") }}" class="btn btn-warning">Edit</a>

                </div>
            </div>
        @endforeach
  @endsection
      