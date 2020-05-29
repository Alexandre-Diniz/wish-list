import { dbh } from './config'

const ref = dbh.collection('wish-list')

export const wishes = () => {
  let wishes = {}
  ref.add.limit(50).get().then(querySnapshot => {
    querySnapshot.docs.map(function (documentSnapshot) {
      return (wishes[documentSnapshot.id] = documentSnapshot.data())
    })
  })
}

export const addData = () => ref.doc().set({
  wish: 'C#'
})

export const listOfData = new Promise(function(resolve, reject) {

  ref.get().then((snapshot) => {
    resolve(snapshot)
    snapshot.forEach((doc) => {
      console.log(doc.id, '=>', doc.data());
    });
  })
  .catch((err) => {
    console.log('Error getting documents', err);
  })
})
