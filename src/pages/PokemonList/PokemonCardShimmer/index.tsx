const PokemonCardShimmer = () => {
	return (
		<section className="bg-gray-50 cursor-pointer flex-none overflow-hidden rounded-lg h-fit border border-gray-300 w-96 select-none">
			<header className="p-2 h-60">
				<div className="w-full h-full object-contain border border-gray-300 bg-gray-100 animate-pulse rounded-lg" />
			</header>
			<footer className="p-2 bg-white">
				<div className="flex items-center text-transparent gap-2 font-bold mb-2.5">
					<div className="bg-gray-100 rounded-full px-2 py-1 grid place-items-center">
						<p className="text-sm animate-pulse">#123</p>
					</div>
					<h3 className="underline text-xl animate-pulse bg-gray-100 rounded-full">
						Pikachu
					</h3>
				</div>
				<div className="flex items-center flex-col text-transparent gap-2 justify-between">
					<div className="flex items-center justify-between gap-2 w-full">
						<p className="bg-gray-100 rounded-full animate-pulse">
							Experience
						</p>
						<p className="font-medium bg-gray-100 rounded-full animate-pulse">
							{100}
						</p>
					</div>
					<div className="flex items-center justify-between gap-2 w-full">
						<p className="bg-gray-100 rounded-full animate-pulse">
							Height (decimetres)
						</p>
						<p className="font-medium bg-gray-100 rounded-full animate-pulse">
							{100}
						</p>
					</div>
					<div className="flex items-center justify-between gap-2 w-full">
						<p className="bg-gray-100 rounded-full animate-pulse">
							Weight (hectograms)
						</p>
						<p className="font-medium bg-gray-100 rounded-full animate-pulse">
							{100}
						</p>
					</div>
				</div>
			</footer>
		</section>
	);
};

export default PokemonCardShimmer;
