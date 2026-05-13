export const metadata = {
  title: "Javuli Kadal Air"
}

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

const HomePage = async () => {
  await delay(2000);
}

export default HomePage;