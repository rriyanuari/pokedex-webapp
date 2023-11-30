import { FaAnglesDown } from 'react-icons/fa6';

const Jumbotron = () => {
	return (
		<div className="">
			<div className="p-5 text-center bg-body-tertiary">
				<div className="container py-5">
					<h1 className="text-body-emphasis">
						PokeDex - Penjelajahan Dunia Pokémon
					</h1>
					<p className="col-lg-8 mx-auto lead">
						Selamat datang di PokeDex, panduan lengkap untuk menjelajahi dunia
						Pokémon! Temukan berbagai informasi tentang Pokémon, mulai dari
						deskripsi spesies, tipe, hingga statistik kinerja dalam pertempuran.
						Sempurnakan tim Pokémon Anda dan siapkan diri untuk petualangan tak
						terlupakan!
					</p>
					<button
						type="button"
						className="my-4 px-4 btn btn-primary"
					>
						<span className='d-block'>Mulai Penjelajahan</span>
						<FaAnglesDown />
					</button>
				</div>
			</div>
		</div>
	);
};

export default Jumbotron;
