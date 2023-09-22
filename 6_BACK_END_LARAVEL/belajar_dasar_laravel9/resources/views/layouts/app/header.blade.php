  {{-- Tamplate Blader Header --}}
  <header class="p-3 text-bg-light mb-3">
    <div class="container">
      <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">

        <ul class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
          <li><a href="#" class="nav-link px-2 text-secondary"><img src="{{ asset('image/logo.png') }}" alt=""></a></li>
        </ul>

        <div class="text-end">
          {{-- Kondisi Untuk Tombol login dan logout --}}
          @if(Auth::check())
          {{-- Redirect ke Route Logout --}}
            <a href="{{ url('logout') }}" class="btn btn-outline-dark me-2">Logout</a>
          @else
          {{-- Redirect ke Route Login dan register --}}
            <a href="{{ url('registrasi') }}" class="btn btn-outline-dark me-2">Register</a>
            <a href="{{ url('login') }}" class="btn btn-outline-dark me-2">Login</a>
          @endif
        </div>
      </div>
    </div>
  </header>