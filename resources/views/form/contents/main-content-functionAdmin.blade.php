@section('main-content')	
		
		@yield('content-perfil')
		
		@if ($data['id'] <> '')

			@yield('content-perfil-form')

		@endif

		@yield('content-perfil-view-form')

		@yield('content-stats')
		
		@yield('content-searchuser')

		@yield('content-searchagenda')

		@yield('content-createuser')

		@yield('content-createusersistem')

		@yield('content-createagenda')

		@yield('content-manuals')	

		@yield('content-aboutDHK')

		@yield('content-myfiles')

		

@endsection