const { exec } = require('child_process');

function executeCommand(command, dir, callback) {
  exec(command, { cwd: dir, shell:"/bin/bash" }, (error, stdout, stderr) => {
    if (error) {
      console.error(`Error executing command: ${error.message}`);
      callback(error, null);
    } else if (stderr) {
      console.error(`Command produced an error: ${stderr}`);
      callback(new Error(stderr), null);
    } else {
      callback(null, stdout.trim());
    }
  });
}

exports.hello = async (req, res) => {
  try {
    const program= req?.query?.program || null;
    let args = req?.query?.args || null; 

    if(args){
      args = args.split(",").join(" ");
    }

    if(program == null){
      return res.status(404).send("Please specify the program");
    }

    executeCommand(`./${program} ${args}`, './src/core42', (error, output) => {
      if (error) {
        console.error(error);
        return res.status(500).send('Internal Server Error');
      }

      // Send the output in the success case
      return res.send(output);
    });
  } catch (error) {
    console.error(error);
    return res.status(500).send('Internal Server Error');
  }
};

