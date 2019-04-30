const filters = document.body.querySelectorAll('input[name=choice]');

for (let i = 0; i < filters.length; i++) {
  filters[i].addEventListener('click', setFilter);
}

const calendar = document.body.querySelector('#eventCalendar');
calendar.addEventListener('click', setFilter);

function setFilter() {
  setTimeout(() => {
    const events = document.body.querySelectorAll('.eventCalendar-list li');
    let filter;
    if (typeof this.value === 'string') {
      filter = this.value;
    } else {
      for (let i = 0; i < filters.length; i++) {
        if (filters[i].checked) {
          filter = filters[i].value;
        }
      }
    }
    for (let i = 0; i < events.length; i++) {
      if (!(filter === events[i].className)) {
        events[i].style.display = 'none';
      } else {
        events[i].style.display = 'list-item';
      }
    }
    if (filter === 'all') {
      for (let i = 0; i < events.length; i++) {
        events[i].style.display = 'list-item';
      }
    }
  }, 400)
}