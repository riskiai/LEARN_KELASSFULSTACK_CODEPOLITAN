@extends('layouts.app')

{{-- Ketika kita meggunakan Section yang sama ubahlah section di title --}}
@section('title')
  Buat Postingan
@endsection

@section('content')
  <div class="container">
    <br>
    <h1>Buat Postingan Baru</h1>
    {{-- <a href="{{ url('postsData') }}">< Kembali</a> --}}
 
    <form action="{{ url('postsData') }}" method="POST" class="form-control">
        {{-- MIDDLEWARE CSRF MENYELEKSI DATA HACKER --}}
        @csrf

        <div class="mb-3">
            <label for="title" class="form-label">Judul</label>
            <input type="text" class="form-control" id="title" name="title">
          </div>
          <div class="mb-3">
            <label for="content" class="form-label">Konten</label>
            <textarea class="form-control" id="content" name="content" rows="3"></textarea>
          </div>
          <button type="submit" class="btn btn-primary">Simpan</button>
    </form>
  </div>
@endsection