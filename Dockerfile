#létrehoz egy alap linuxot nginx webszerverrel
FROM nginx:latest

#ide copyzza bele a dolgainkat
COPY ./todo-app/build /usr/share/nginx/html

#megadjuk neki a port-ot
##az nginx alapból a 80-as porton fut
EXPOSE 80