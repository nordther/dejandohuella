@section('content-nav')



	@if (($data['authconfirm'] == false) && ($data['multimediaAuth'] == false))

		<nav class="nav bg-content-neutro-opacity" id="main-menu">

			<ul class="main-menu">

				<li>

					<a href="/{{ $data['roll'] }}" >

					@foreach($data['dll']['nav'] as $dll)

						@if ($dll->srcnav_filename == 'about.png')
							<img src="{{asset($dll->srcnav_dir.$dll->srcnav_filename)}}" alt="" class="img-dm-9 img-margin-top-4">
						@endif

					@endforeach
						Inicio
					</a>

				</li>

				<li id="targetLoginUsers">

					<a href="#ingresar"  data="/Ingresar" id="nav_btn_login" class="">

						@foreach($data['dll']['nav'] as $dll)

							@if ($dll->srcnav_filename == 'arrow-down.png')
								<img src="{{asset($dll->srcnav_dir.$dll->srcnav_filename)}}" alt="" class="img-dm-9 img-margin-top-4">
							@endif

						@endforeach

						Ingresar al Sistema

					</a>

				</li>

				@yield('content-login')

				@include('alerts.formAlertAuth')

				<li class="nav-form-login-hidde" id="nav-form-login-hidde" class="">

					<a href="#noticias" data="/Novedades">

					@foreach($data['dll']['nav'] as $dll)

						@if ($dll->srcnav_filename == 'newtopics.png')
							<img src="{{asset($dll->srcnav_dir.$dll->srcnav_filename)}}" alt="" class="img-dm-9 img-margin-top-4">
						@endif

					@endforeach

						Novedades

					</a>

				</li>

				<li class="nav-form-login-hidde" id="nav-form-login-hidde" class="">

					<a href="#quienessomos" data="/Quienes somos">

					@foreach($data['dll']['nav'] as $dll)

						@if ($dll->srcnav_filename == 'fundacionData.png')
							<img src="{{asset($dll->srcnav_dir.$dll->srcnav_filename)}}" alt="" class="img-dm-9 img-margin-top-4">
						@endif

					@endforeach

						Quienes somos

					</a>

				</li>

				<li class="nav-form-login-hidde" id="nav-form-login-hidde" class="">

					<a href="#contactenos" data="/Contactenos">

					@foreach($data['dll']['nav'] as $dll)

						@if ($dll->srcnav_filename == 'contact.png')
							<img src="{{asset($dll->srcnav_dir.$dll->srcnav_filename)}}" alt="" class="img-dm-9 img-margin-top-4">
						@endif

					@endforeach

						Contactenos

					</a>

				</li>


				<li>

					<a href="#Donacion" class="">

					@foreach($data['dll']['nav'] as $dll)

						@if ($dll->srcnav_filename == 'donation.png')
							<img src="{{asset($dll->srcnav_dir.$dll->srcnav_filename)}}" alt="" class="img-dm-9 img-margin-top-4">
						@endif

					@endforeach

						Donativo

					</a>

				</li>

				<li>

					<a href="/Multimedia" class="">

					@foreach($data['dll']['nav'] as $dll)

						@if ($dll->srcnav_filename == 'media.png')
							<img src="{{asset($dll->srcnav_dir.$dll->srcnav_filename)}}" alt="" class="img-dm-9 img-margin-top-4">
						@endif

					@endforeach

						Multimedia

					</a>

				</li>

			</ul>

		</nav>

	@elseif(($data['authconfirm'] == true)&&($data['multimediaAuth'] == false))

		<nav class="nav bg-content-neutro-opacity" id="main-menu">

			<ul class="main-menu">

				<li>

					<a href="/{{ $data['roll'] }}" class="">

						@foreach($data['dll']['nav'] as $dll)

							@if ($dll->srcnav_filename == 'about.png')
								<img src="{{asset($dll->srcnav_dir.$dll->srcnav_filename)}}" alt="" class="img-dm-9 img-margin-top-4">
							@endif

						@endforeach

						Inicio

					</a>

				</li>

				<li id="targetGestionUsers">

					<a class="">

						@foreach($data['dll']['nav'] as $dll)

							@if ($dll->srcnav_filename == 'administratorUsers.png')
								<img src="{{asset($dll->srcnav_dir.$dll->srcnav_filename)}}" alt="" class="img-dm-9 img-margin-top-4">
							@endif

						@endforeach

						Gestion de Usuarios

					</a>

				</li>

				<ul id="subMenuGestionUsers">

					<li>

						<a href="/{{$data['roll']}}/buscar-usuario" class="">

							<img src="{{asset('img/nav/searchnav.png')}}" class="img-dm-9 img-margin-top-4" >

							Buscar Usuario

						</a>

					</li>
					@if($data['permisos']['create'] == true)
					<li>

						<a href="/Admin/crear/usuario" class="">

							<img src="{{asset('img/nav/createUsers.png')}}" class="img-dm-9 img-margin-top-4" >

							Crear Usuario

						</a>


					</li>

					@endif

				</ul>

				<li id="targetGestionAgenda">

					<a class="">

						@foreach($data['dll']['nav'] as $dll)

							@if ($dll->srcnav_filename == 'agenda.png')
								<img src="{{asset($dll->srcnav_dir.$dll->srcnav_filename)}}" alt="" class="img-dm-9 img-margin-top-4">
							@endif

						@endforeach

						Gestionar Agenda

					</a>

				</li>

				<ul id="subMenuGestionAgenda">

					<li>

						<a href="/{{$data['roll']}}/buscar-agenda" class="">

							<img src="{{asset('img/nav/searchnav.png')}}" class="img-dm-9 img-margin-top-4" id="img-dm-8-login">

							Buscar Agenda

						</a>

					</li>
					@if($data['permisos']['create'] == true)
					<li>

						<a href="/Admin/crear/agenda" class="">

							<img src="{{asset('img/nav/createAgenda.png')}}" class="img-dm-9 img-margin-top-4" id="img-dm-8-login">

							Crear Agenda

						</a>


					</li>
					@endif

				</ul>

				<li id="targetGestionMultimedia">

					<a class="">

						@foreach($data['dll']['nav'] as $dll)

							@if ($dll->srcnav_filename == 'administratorMulti.png')
								<img src="{{asset($dll->srcnav_dir.$dll->srcnav_filename)}}" alt="" class="img-dm-9 img-margin-top-4">
							@endif

						@endforeach

						Gestionar Multimedia

					</a>

				</li>

				<ul id="subMenuGestionMultimedia">

					<li>

						<a href="/{{$data['roll']}}/buscar-multimedia" class="">

							<img src="{{asset('img/nav/searchnav.png')}}" class="img-dm-9 img-margin-top-4" id="img-dm-8-login">

							Buscar Multimedia

						</a>

					</li>
					@if($data['permisos']['create'] == true)
					<li>

						<a href="/Admin/subir/subir-multimedia" class="">

							<img src="{{asset('img/nav/createAgenda.png')}}" class="img-dm-9 img-margin-top-4" id="img-dm-8-login">

							Subir Multimedia

						</a>


					</li>
					@endif

				</ul>

				<li>
					<a href="/Admin/acerca-de-dejando-huella-kids">

						@foreach($data['dll']['nav'] as $dll)

							@if ($dll->srcnav_filename == 'settingsAbout.png')
								<img src="{{asset($dll->srcnav_dir.$dll->srcnav_filename)}}" alt="" class="img-dm-9 img-margin-top-4">
							@endif

						@endforeach

						Acerca de D.H.K.

					</a>
				</li>

				<li>

					<a href="/Admin/manuals" class="">

						@foreach($data['dll']['nav'] as $dll)

							@if ($dll->srcnav_filename == 'help.png')
								<img src="{{asset($dll->srcnav_dir.$dll->srcnav_filename)}}" alt="" class="img-dm-9 img-margin-top-4">
							@endif

						@endforeach

						Ayuda

					</a>

				</li>

				<li>

					<a href="/Admin/gestion-donativos">

						@foreach($data['dll']['nav'] as $dll)

							@if ($dll->srcnav_filename == 'donation.png')
								<img src="{{asset($dll->srcnav_dir.$dll->srcnav_filename)}}" alt="" class="img-dm-9 img-margin-top-4">
							@endif

						@endforeach

						Apoya nuestra fundación

					</a>

				</li>

			</ul>

		</nav>

	@elseif($data['multimediaAuth'] == true)

		<nav class="nav bg-content-neutro-opacity" id="main-menu">

			<ul class="main-menu" class="">

				<li>

					<a href="/{{ $data['roll'] }}"  data="/Inicio" onclick="showSubMenu1()">

						@foreach($data['dll']['nav'] as $dll)

							@if ($dll->srcnav_filename == 'about.png')
								<img src="{{asset($dll->srcnav_dir.$dll->srcnav_filename)}}" alt="" class="img-dm-9 img-margin-top-4">
							@endif

						@endforeach

						Inicio

					</a>

				</li>

				<li>

					<a href="/{{ $data["roll"] }}/Videos" class="">

						@foreach($data['dll']['nav'] as $dll)

							@if ($dll->srcnav_filename == 'administratorMulti.png')
								<img src="{{asset($dll->srcnav_dir.$dll->srcnav_filename)}}" alt="" class="img-dm-9 img-margin-top-4">
							@endif

						@endforeach

						Videos

					</a>

				</li>

				<li>

					<a href="/{{ $data["roll"] }}/Audios" class="">

						@foreach($data['dll']['nav'] as $dll)

							@if ($dll->srcnav_filename == 'audio.png')
								<img src="{{asset($dll->srcnav_dir.$dll->srcnav_filename)}}" alt="" class="img-dm-9 img-margin-top-4">
							@endif

						@endforeach

						Audios

					</a>

				</li>

				<li>

					<a href="/{{ $data["roll"] }}/Galeria" class="">

						@foreach($data['dll']['nav'] as $dll)

							@if ($dll->srcnav_filename == 'gallery.png')
								<img src="{{asset($dll->srcnav_dir.$dll->srcnav_filename)}}" alt="" class="img-dm-9 img-margin-top-4">
							@endif

						@endforeach

						Galeria de Arte

					</a>

				</li>

			</ul>

		</nav>

	@endif

@endsection
