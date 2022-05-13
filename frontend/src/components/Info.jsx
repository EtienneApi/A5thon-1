import React from "react";
import "../CSS/info.css";
// eslint-disable-next-line import/no-extraneous-dependencies
import { useForm } from "react-hook-form";
// eslint-disable-next-line import/no-extraneous-dependencies
import emailjs from "@emailjs/browser";

export default function Info() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data, r) => {
    const templateId = "template_nqsoryp";
    const serviceId = "service_hkmt1sg";

    // Ici, nous récupérons les informations du formulaire.
    // eslint-disable-next-line no-use-before-define
    sendEmail(serviceId, templateId, {
      Name: data.Name,
      Email: data.Email,
      Sujet: data.Sujet,
      Message: data.Message,
      // reply_to: r.target.reset() Permet de supprimer tous les champs une fois l'email envoyer
      reply_to: r.target.reset(),
    });
  };

  const sendEmail = (serviceId, templateId, variables) => {
    emailjs
      .send(serviceId, templateId, variables, "VjiaTZIUFRUtLrk3M")
      .then((res) => {
        // eslint-disable-next-line no-restricted-syntax
        console.info("succes status :", res.status);
      })
      .catch((error) => console.error("une erreur est survenue", error));
  };

  return (
    <div>
      <div>
        <h1>quelque information utile : </h1>
        <img
          className="imgInfo"
          src="https://www.bioalaune.com/img/userfiles/2019/actualites-media/OPENING%20UP%20A%20restaurant%20(2).png"
          alt=""
        />
        <div className="contact">
          <h1>Contactez-nous </h1>
          <form onSubmit={handleSubmit(onSubmit)}>
            <label className="contactLabel" htmlFor="nameInput">
              Prénom :
              <input
                className="contactInput"
                type="text"
                name="nameInput"
                // eslint-disable-next-line react/jsx-props-no-spreading
                {...register("Name", { required: true })}
              />
              {/* Si le champ n'est pas rempli, on indique à l'utilisateur que ce champ est requis. */}
              {errors.Name?.type === "required" && (
                <p className="contactRequired">Entrer votre prénom</p>
              )}
            </label>
            <label className="contactLabel" htmlFor="emailInput">
              Email :
              <input
                className="contactInput"
                type="text"
                name="emailInput"
                // eslint-disable-next-line react/jsx-props-no-spreading
                {...register("Email", { required: true })}
              />
              {errors.Email?.type === "required" && (
                <p className="contactRequired">Entrer un Email</p>
              )}
            </label>
            <label className="contactLabel" htmlFor="sujetlInput">
              Quel est le sujet ?
              <input
                className="contactInput"
                type="text"
                name="sujetlInput"
                // eslint-disable-next-line react/jsx-props-no-spreading
                {...register("Sujet", { required: true })}
              />
              {errors.Sujet?.type === "required" && (
                <p className="contactRequired">Entrer un sujet</p>
              )}
            </label>
            <label className="contactLabel" htmlFor="messageInput">
              Message : 
              <textarea
                className="contactText"
                name="messageInput"
                rows="6"
                cols="50"
                // eslint-disable-next-line react/jsx-props-no-spreading
                {...register("Message", { required: true })}
              />
              {errors.Message?.type === "required" && (
                <p className="contactRequired">Entrer un message</p>
              )}
            </label>
            <button type="submit" value="send" className="buttonForm">
              Envoyer
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
