
import App from 'App';
import { Paths } from 'enums/Paths';
import { fireEvent, render, screen } from 'utils';
import { FooterTestIds } from 'components/Footer/FooterTestIds';
import { NavbarTestIds } from 'components/Navbar/NavbarTestIds';
import { NavbarTitles } from 'components/Navbar/NavbarTitles';
import { AboutPageTestIds } from 'pages/About/AboutPageTestIds';
import { HomePageTestIds } from 'pages/Home/HomePageTestIds';
import { MapPageTestIds } from 'pages/Map/MapPageTestIds';

describe('App', () => {
  it('should make possible reaching /about path', () => {
    const route = Paths.About;

    render(<App />, { route });

    const aboutPage = screen.getByTestId(AboutPageTestIds.Container);
    expect(aboutPage).toBeInTheDocument();
  });

  it('should make possible reaching /map path', () => {
    const route = Paths.Map;

    render(<App />, { route });

    const mapPage = screen.getByTestId(MapPageTestIds.MapPage);
    expect(mapPage).toBeInTheDocument();
  });

  it('should render navbar', () => {
    render(<App />);

    const navbar = screen.getByTestId(NavbarTestIds.Container);

    expect(navbar).toBeInTheDocument();
  });

  it('should render PageContainer', () => {
    render(<App />);

    const PageContainer = screen.getByRole('main');

    expect(PageContainer).toBeInTheDocument();
  });

  it('should render footer', () => {
    render(<App />);

    const footer = screen.getByTestId(FooterTestIds.Footer);

    expect(footer).toBeInTheDocument();
  });

  it('should render home page', () => {
    render(<App />);

    const homePage = screen.getByTestId(HomePageTestIds.HomePage);

    expect(homePage).toBeInTheDocument();
  });

  it('should redirect to /map after link click', async () => {
    const route = Paths.Home;
    render(<App />, { route });

    const mapLink = screen.getByTitle(NavbarTitles.Map);

    fireEvent.click(mapLink);

    const map = screen.getByTestId(MapPageTestIds.MapPage);

    expect(map).toBeInTheDocument();
  });

  it('should redirect to /home from /about after link click', async () => {
    const route = Paths.About;
    render(<App />, { route });

    const homeLink = screen.getByTitle(NavbarTitles.Home);

    fireEvent.click(homeLink);

    const home = screen.getByTestId(HomePageTestIds.HomePage);

    expect(home).toBeInTheDocument();
  });

  it('should redirect to /about after link click', async () => {
    render(<App />);

    const aboutLink = screen.getByTitle(NavbarTitles.About);

    fireEvent.click(aboutLink);

    const about = screen.getByTestId(AboutPageTestIds.Container);

    expect(about).toBeInTheDocument();
  });
});
