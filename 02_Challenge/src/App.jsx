

function formatDate(date) {
  const options = { year: "numeric", month: "long", day: "numeric" };
  return new Date(date).toLocaleDateString(undefined, options);
}

export default function App() {
  const message = {
    content:
      "Hello This is Monkey D Luffy .And  I am going to be The King of the Pirates",
    published: "2024-03-14T15:09:26.000Z",
    author: {
      avatarSrc:
        "https://rukminim2.flixcart.com/image/850/1000/kyt0ya80/poster/0/8/f/medium-kid-luffy-monkey-d-luffy-one-piece-anime-hd-matte-finish-original-imagaybn3qgbwufb.jpeg?q=20&crop=false",
      avatarDescription: "Cartoon bear",
      name: "Monkey .D .Luffy",
      handle: "@GomuGomu",
    },
  };

  const profileUrl = `/users/${message.author.handle}`;

  return (
    <article >
      <header>
        <img
          alt={message.author.avatarDescription}
          src={message.author.avatarSrc}
        />
        <a href={profileUrl}>{message.author.name}</a>
      </header>
      <p>{message.content}</p>
      <footer>
        Posted{"    "}
        <time dateTime={message.published}>
          {formatDate(message.published)}
        </time>
      </footer>
    </article>
  );
}
