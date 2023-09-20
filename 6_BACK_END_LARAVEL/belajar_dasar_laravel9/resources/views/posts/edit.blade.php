@extends('layouts.app')

@section('title')
    Edit Data Blog
@endsection

@section('content')
    <h1>Ubah Postingan Baru</h1>
    {{-- <a href="{{ url('postsData') }}">< Kembali</a> --}}

    <form action="{{ url("postsData/$post->id") }}" method="POST" class="form-control">
        {{-- MIDDLEWARE CSRF MENYELEKSI DATA HACKER --}}
        @method('PATCH')
        @csrf

        <div class="mb-3">
            <label for="title" class="form-label">Judul</label>
            <input type="text" class="form-control" id="title" name="title" value="{{ $post->title }}">
          </div>
          <div class="mb-3">
            <label for="content" class="form-label">Konten</label>
            <textarea class="form-control" id="content" name="content" rows="3">{{ $post->content }}</textarea>
          </div>
          <button type="submit" class="btn btn-primary">Simpan</button>
       
    </form>  
          {{-- Proses Delete --}}
        <form action="{{ url("postsData/$post->id") }}"   method="POST">
            @method('DELETE')
            @csrf
            <button type="submit" class="btn btn-danger">Hapus</button>
        </form>


@endsection