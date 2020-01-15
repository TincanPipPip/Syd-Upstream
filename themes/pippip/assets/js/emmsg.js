import Cookies from 'js-cookie';

const emergencyMessage = document.getElementById('emmsg');

if (emergencyMessage != null) {
  if (Cookies.get('hideemmsg')) {
    emergencyMessage.setAttribute('data-state', 'hidden');
  } else {
    emergencyMessage.setAttribute('data-state', 'visible');
  }

  const btn = document.getElementById('emmsg-close');

  btn.addEventListener('click', function(e) {
    Cookies.set('hideemmsg', 'true', { expires: 30 });
    emergencyMessage.setAttribute('data-state', 'hidden');

    e.preventDefault();
  });
}
