export default function Seats ( {seats, setSeats} ) {
  const { idSessao } = useParams();

  useEffect(() => {
		const promise = axios.get(`https://mock-api.driven.com.br/api/v7/cineflex/showtimes/${idSessao}/seats`);

		promise.then(response => {
			setSeats(response.data);
		});
	}, []);

  return (
    <SessionsSection>
      <header>
        <h3>Selecione o horário</h3>
      </header>
      <main>
        {(seats.length === 0) ? <img src={loadingCountdown} />
        : seats.map((seat, index) =>
        <SessionDay
          key={index}
          id={seats.id}
          weekday={day.weekday}
          date={day.date}
          showtimes={day.showtimes}
          idFilme={idFilme} />)}
      </main>
    </SessionsSection>
  );
}