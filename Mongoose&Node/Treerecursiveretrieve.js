
const getAllChildNodes = (startNodeId, callback) => {
    
    const tree = [];
    let idsToLoad = [];
  
    yourModel.findOne({_id: startNodeId }).exec((err, node) => {
      tree.push(node);
      idsToLoad = node.children;
      let count = 0;
  
      async.whilst(
        () => {
          return count < idsToLoad.length
        },
        (cb) => {
          yourModel.findOne({_id: idsToLoad[count] }).exec((err, doc) => {
            tree.push(doc);
            idsToLoad = idsToLoad.concat(doc.children);
            count++;
            cb();
          });
        },
        (err) => {
          if (err) {
            console.error(err);
            return callback(err);
          }
          return callback(null, tree);
        }
      );
  
    });
  }