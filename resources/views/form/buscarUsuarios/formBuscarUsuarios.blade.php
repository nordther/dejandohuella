@section('content-searchuser')
	
	<div class="content bg-content">

		<div class="form-content-search" id="form-content-search-user">
			
			<div class="form-header-img" style="background-image: url({{ asset('img/imgTopics/searchBackground/header.jpg') }}) ; height: 180px; width: 100%; background-size: 100%;">
				
			</div>

			<div class="form-header-search form-search-col-dm-h-2">

				<div class="form-search-col form-search-col-dm-w-1 form-search-col-dm-h-2 ">

					{!! Form::label(null, 'Foto' ); !!}

				</div>

				<div class="form-search-col form-search-col-dm-w-2 form-search-col-dm-h-2 form-search-col-border">

					{!! Form::label(null, 'Nombres' ); !!}

				</div>


				<div class="form-search-col form-search-col-dm-w-2 form-search-col-dm-h-2 form-search-col-border">

					{!! Form::label(null, 'Telefono' ); !!}

				</div>				

				<div class="form-search-col form-search-col-dm-w-3 form-search-col-dm-h-2 form-search-col-border">

					{!! Form::label(null, 'Correo Electronico' ); !!}

				</div>

				<div class="form-search-col form-search-col-dm-w-2 form-search-col-dm-h-2 ">
					
					{!! Form::label(null, 'Acciones' ); !!}

				</div>

			</div>	

			<div class="form-article-search scroll" id="formSearchIncludeInformation">				

			</div>

			<div class="form-footer-search">				
					
					<div id="form-result-log"></div>				

			</div>			
		
		</div>

	</div>	
		
		@yield('content-tools-search')		
			
		@yield('content-alert-confirm')	

		

		
	

@endsection