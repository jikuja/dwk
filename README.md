# DevOps with Kubernetes 2022

## The environment

## "Client" machine

* Mac OS Catalina(10.15.7)
* Visual Studio Code with Remote SSH extension

## "Server" machine

* Windows 10 Home
* WSL 2
* Disabled Ethernet(WSL) network connection on public profile settings
  * https://github.com/microsoft/WSL/issues/8365#issuecomment-1155611817
* OpenSSH connection directly into WSL 2
  * https://www.hanselman.com/blog/the-easy-way-how-to-ssh-into-bash-and-wsl2-on-windows-10-from-an-external-machine
* Extra configs to enable certicated-based auth
  * http://woshub.com/using-ssh-key-based-authentication-on-windows/
    * Enable certificate auth in `sshd_config`
    * Disable `administrators_authorized_keys` file usage in `sshd_config`
    * Setup correct file permissions for `~\.ssh\authorized_keys or disable` or disable `StrictModes` in `sshd_config` 
  * Change docker credential storage to "". For me it was desktop.exe
    * https://github.com/drud/ddev/issues/2342#issuecomment-750816013

## Notes
Load completions:
* source <(kubectl completion bash)
* source <(k3d completion bash)

Persist completions:
* sudo sh -c "kubectl completion bash > /etc/bash_completion.d/k3d"
* sudo sh -c "k3d completion bash > /etc/bash_completion.d/k3d"

Docker:
From docker docs
> Run docker build -t <your_username>/my-private-repo . to build your Docker image.
> Run docker run <your_username>/my-private-repo to test your Docker image locally.
> Run docker push <your_username>/my-private-repo to push your Docker image to Docker Hub.
