import React from 'react';
import { ScrollView, Text, StyleSheet } from 'react-native';

export const Article = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Lorem ipsum!</Text>
      <Text style={styles.text}>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic ratione
        beatae odio fuga aperiam, enim commodi nam voluptates quidem tempora,
        corporis molestiae neque quas! Culpa nam veritatis nisi ducimus aut quis
        doloribus, dignissimos nesciunt maiores voluptatibus voluptate impedit
        vero optio tenetur sed perferendis facere eaque repellendus fuga modi
        distinctio magni? Voluptas quaerat nobis obcaecati. Voluptate quisquam
        exercitationem accusamus magni fugiat. Reprehenderit, voluptas fugiat
        rerum nostrum, omnis ea in pariatur mollitia tenetur temporibus,
        necessitatibus atque aliquid praesentium soluta velit ducimus? Quidem
        veritatis similique corrupti ratione assumenda nostrum aut alias. Ipsa
        cum error odio ea animi, tenetur fugiat nobis sequi tempora aliquam.
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic ratione
        beatae odio fuga aperiam, enim commodi nam voluptates quidem tempora,
        corporis molestiae neque quas! Culpa nam veritatis nisi ducimus aut quis
        doloribus, dignissimos nesciunt maiores voluptatibus voluptate impedit
        vero optio tenetur sed perferendis facere eaque repellendus fuga modi
        distinctio magni? Voluptas quaerat nobis obcaecati. Voluptate quisquam
        exercitationem accusamus magni fugiat. Reprehenderit, voluptas fugiat
        rerum nostrum, omnis ea in pariatur mollitia tenetur temporibus,
        necessitatibus atque aliquid praesentium soluta velit ducimus? Quidem
        veritatis similique corrupti ratione assumenda nostrum aut alias. Ipsa
        cum error odio ea animi, tenetur fugiat nobis sequi tempora aliquam.
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic ratione
        beatae odio fuga aperiam, enim commodi nam voluptates quidem tempora,
        corporis molestiae neque quas! Culpa nam veritatis nisi ducimus aut quis
        doloribus, dignissimos nesciunt maiores voluptatibus voluptate impedit
        vero optio tenetur sed perferendis facere eaque repellendus fuga modi
        distinctio magni? Voluptas quaerat nobis obcaecati. Voluptate quisquam
        exercitationem accusamus magni fugiat. Reprehenderit, voluptas fugiat
        rerum nostrum, omnis ea in pariatur mollitia tenetur temporibus,
        necessitatibus atque aliquid praesentium soluta velit ducimus? Quidem
        veritatis similique corrupti ratione assumenda nostrum aut alias. Ipsa
        cum error odio ea animi, tenetur fugiat nobis sequi tempora aliquam.
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic ratione
        beatae odio fuga aperiam, enim commodi nam voluptates quidem tempora,
        corporis molestiae neque quas! Culpa nam veritatis nisi ducimus aut quis
        doloribus, dignissimos nesciunt maiores voluptatibus voluptate impedit
        vero optio tenetur sed perferendis facere eaque repellendus fuga modi
        distinctio magni? Voluptas quaerat nobis obcaecati. Voluptate quisquam
        exercitationem accusamus magni fugiat. Reprehenderit, voluptas fugiat
        rerum nostrum, omnis ea in pariatur mollitia tenetur temporibus,
        necessitatibus atque aliquid praesentium soluta velit ducimus? Quidem
        veritatis similique corrupti ratione assumenda nostrum aut alias. Ipsa
        cum error odio ea animi, tenetur fugiat nobis sequi tempora aliquam.
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic ratione
        beatae odio fuga aperiam, enim commodi nam voluptates quidem tempora,
        corporis molestiae neque quas! Culpa nam veritatis nisi ducimus aut quis
        doloribus, dignissimos nesciunt maiores voluptatibus voluptate impedit
        vero optio tenetur sed perferendis facere eaque repellendus fuga modi
        distinctio magni? Voluptas quaerat nobis obcaecati. Voluptate quisquam
        exercitationem accusamus magni fugiat. Reprehenderit, voluptas fugiat
        rerum nostrum, omnis ea in pariatur mollitia tenetur temporibus,
        necessitatibus atque aliquid praesentium soluta velit ducimus? Quidem
        veritatis similique corrupti ratione assumenda nostrum aut alias. Ipsa
        cum error odio ea animi, tenetur fugiat nobis sequi tempora aliquam.
      </Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'lightgreen',
  },
  title: {
    paddingVertical: 10,
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'orange',
  },
  text: {
    fontSize: 18,
  },
});
