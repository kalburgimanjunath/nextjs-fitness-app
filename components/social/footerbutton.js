import { useState, useEffect } from 'react';
import { useSpeechSynthesis } from 'react-speech-kit';
export default function Footerbutton({ item }) {
  const [likes, setLikes] = useState(0);
  const [comments, setComments] = useState(0);
  const [bookmarks, setBookmarks] = useState(0);

  const { speak } = useSpeechSynthesis();
  const languageOptions = [
    { label: 'Cambodian', value: 'km-KH' },
    { label: 'Deutsch', value: 'de-DE' },
    { label: 'English', value: 'en-AU' },
    { label: 'Farsi', value: 'fa-IR' },
    { label: 'Français', value: 'fr-FR' },
    { label: 'Italiano', value: 'it-IT' },
    { label: '普通话 (中国大陆) - Mandarin', value: 'zh' },
    { label: 'Portuguese', value: 'pt-BR' },
    { label: 'Español', value: 'es-MX' },
    { label: 'Svenska - Swedish', value: 'sv-SE' },
  ];
  const [lang, setLang] = useState('en-AU');
  const { cancel, speaking, supported, voices } = useSpeechSynthesis();
  const voice = voices[0] || null;
  const rate = 1;
  const pitch = 1;

  return (
    <div className="footerbutton">
      <div className="left">
        <span onClick={() => setLikes(likes + 1)}>
          <i className="bi bi-star"></i> {likes}
        </span>
        <span onClick={() => setComments(comments + 1)}>
          <i className="bi bi-chat"></i> {comments}
        </span>
      </div>
      <div className="right">
        <span onClick={() => setBookmarks(bookmarks + 1)}>
          <i className="bi bi-bookmark"></i> {bookmarks}
        </span>
        {item && item.description ? (
          <span onClick={() => speak({ text: item.title })}>
            <i className="bi bi-play-circle"></i>
          </span>
        ) : null}

        <span>
          <i className="bi bi-share"></i>
        </span>
        <span>
          <i className="bi bi-three-dots-vertical"></i>
        </span>
      </div>
    </div>
  );
}
