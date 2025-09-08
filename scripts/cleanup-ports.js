#!/usr/bin/env node

import { exec } from 'child_process';

// 清理可能占用端口的进程
function cleanupPorts() {
  const ports = [1420, 1421, 1428];

  ports.forEach(port => {
    exec(`lsof -ti:${port}`, (error, stdout) => {
      if (stdout) {
        const pids = stdout.trim().split('\n');
        pids.forEach(pid => {
          if (pid) {
            console.log(`Killing process ${pid} on port ${port}`);
            exec(`kill -9 ${pid}`, killError => {
              if (killError) {
                console.log(
                  `Failed to kill process ${pid}:`,
                  killError.message
                );
              } else {
                console.log(`Successfully killed process ${pid}`);
              }
            });
          }
        });
      }
    });
  });
}

cleanupPorts();
