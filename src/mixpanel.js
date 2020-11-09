import mixpanel from 'mixpanel-browser';
mixpanel.init('41b7906b0ad7a03670389a29205efa1c');

// let env_check = process.env.NODE_ENV === 'production';
let env_check = true;

let actions = {
  identify: (id) => {
    if (env_check) mixpanel.identify(id);
  },
  alias: (id) => {
    if (env_check) mixpanel.alias(id);
  },
  track: (name, props) => {
    if (env_check) mixpanel.track(name, props);
  },
  people: {
    set: (props) => {
      if (env_check) mixpanel.people.set(props);
    },
  },
  register: (props) => {
    if (env_check) mixpanel.register(props);
  },
  track_links: (link, id, props) => {
    if (env_check) mixpanel.track_links(link, id, props);
  },
  track_forms: (link, id) => {
    if (env_check) mixpanel.track_forms(link, id);
  }
};

export let Mixpanel = actions;