{{-- Memisahkan Semua Komponen --}}
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>@yield('title')</title>
    <link href="{{ asset('bootstrap-5/css/bootstrap.min.css') }}" rel="stylesheet" integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossorigin="anonymous">
    <script src="{{ asset('bootstrap-5/js/bootstrap.bundle.min.js') }}" integrity="sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+jjXkk+Q2h455rYXK/7HAuoJl+0I4" crossorigin="anonymous"></script>
    <style>
        .blog {
            padding: 5px;
            border-bottom: 1px solid lightgray;
        }
        small {
            color: grey;
        }
    </style>
</head>
<body>
    {{-- Inlcude Ke Header --}}
    @include('layouts.app.header')

      {{-- Div Body  --}}
      <div class="container">
        
        {{-- ISI Body --}}
        @yield('content')
          
        {{-- Include Footer --}}
        @include('layouts.app.footer')

        </div>
  </body>
  </html>  