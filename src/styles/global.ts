import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
:root{
	--background:#f0f2f5;
	--red:#D1512D;
	--blue:#0096FF;
	--yellow:#EAE509;
	--green:#7DCE13;
}
*{
	margin:0;
	padding:0;
	box-sizing: border-box;
}

html{
	@media (max-width: 1080px) {
	font-size:93.75%;
		
	}

@media (max-width: 720) {

	font-size:87.5%;

}
}

body {
  margin: 0;
  -webkit-font-smoothing: antialiased;
	font-family: 'Source Sans Pro', sans-serif;
  -moz-osx-font-smoothing: grayscale;
  background-color: var(--background);
}
h1,h2,h3,h4,h5, strong{
	font-weight: bold;
}
`
