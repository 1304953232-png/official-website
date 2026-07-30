"use client";

import { useEffect } from "react";
import gsap from "gsap";

type QuickTo = (value: number) => void;

type CardController = {
  element: HTMLElement;
  rect: DOMRect;
  rotateXTo: QuickTo;
  rotateYTo: QuickTo;
  yTo: QuickTo;
  scaleTo: QuickTo;
};

type ButtonController = {
  element: HTMLElement;
  rect: DOMRect;
  xTo: QuickTo;
  yTo: QuickTo;
  scaleTo: QuickTo;
  iconXTo?: QuickTo;
  iconYTo?: QuickTo;
  iconRotateTo?: QuickTo;
};

export function InteractionEffects() {
  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const isFinePointer = window.matchMedia("(pointer: fine)").matches;

    if (reduceMotion || !isFinePointer) return;

    const cardControllers = new WeakMap<HTMLElement, CardController>();
    const buttonControllers = new WeakMap<HTMLElement, ButtonController>();
    let activeCard: CardController | null = null;
    let activeButton: ButtonController | null = null;
    let pointerX = 0;
    let pointerY = 0;
    let pointerTarget: HTMLElement | null = null;
    let moveFrame = 0;

    const getCardController = (element: HTMLElement) => {
      const existing = cardControllers.get(element);
      if (existing) {
        existing.rect = element.getBoundingClientRect();
        return existing;
      }

      const controller: CardController = {
        element,
        rect: element.getBoundingClientRect(),
        rotateXTo: gsap.quickTo(element, "rotateX", { duration: 0.28, ease: "power3.out" }),
        rotateYTo: gsap.quickTo(element, "rotateY", { duration: 0.28, ease: "power3.out" }),
        yTo: gsap.quickTo(element, "y", { duration: 0.28, ease: "power3.out" }),
        scaleTo: gsap.quickTo(element, "scale", { duration: 0.28, ease: "power3.out" })
      };
      cardControllers.set(element, controller);
      return controller;
    };

    const getButtonController = (element: HTMLElement) => {
      const existing = buttonControllers.get(element);
      if (existing) {
        existing.rect = element.getBoundingClientRect();
        return existing;
      }

      const icon = element.querySelector<SVGElement>("svg");
      const controller: ButtonController = {
        element,
        rect: element.getBoundingClientRect(),
        xTo: gsap.quickTo(element, "x", { duration: 0.3, ease: "power3.out" }),
        yTo: gsap.quickTo(element, "y", { duration: 0.3, ease: "power3.out" }),
        scaleTo: gsap.quickTo(element, "scale", { duration: 0.3, ease: "power3.out" }),
        iconXTo: icon ? gsap.quickTo(icon, "x", { duration: 0.24, ease: "power3.out" }) : undefined,
        iconYTo: icon ? gsap.quickTo(icon, "y", { duration: 0.24, ease: "power3.out" }) : undefined,
        iconRotateTo: icon ? gsap.quickTo(icon, "rotate", { duration: 0.24, ease: "power3.out" }) : undefined
      };
      buttonControllers.set(element, controller);
      return controller;
    };

    const resetCard = (controller: CardController) => {
      controller.element.style.setProperty("--spotlight-opacity", "0");
      controller.rotateXTo(0);
      controller.rotateYTo(0);
      controller.yTo(0);
      controller.scaleTo(1);
    };

    const resetButton = (controller: ButtonController) => {
      controller.xTo(0);
      controller.yTo(0);
      controller.scaleTo(1);
      controller.iconXTo?.(0);
      controller.iconYTo?.(0);
      controller.iconRotateTo?.(0);
    };

    const updatePointerEffects = () => {
      moveFrame = 0;
      const card = pointerTarget?.closest<HTMLElement>(".spotlight-card") ?? null;
      const button = pointerTarget?.closest<HTMLElement>(".magnetic-button") ?? null;

      if (card) {
        if (!activeCard || activeCard.element !== card) {
          if (activeCard) resetCard(activeCard);
          activeCard = getCardController(card);
        }

        const { rect } = activeCard;
        const x = pointerX - rect.left;
        const y = pointerY - rect.top;
        const rotateY = ((x / rect.width) - 0.5) * 9;
        const rotateX = ((y / rect.height) - 0.5) * -7;

        card.style.setProperty("--mouse-x", `${x}px`);
        card.style.setProperty("--mouse-y", `${y}px`);
        card.style.setProperty("--spotlight-opacity", "1");
        activeCard.rotateXTo(rotateX);
        activeCard.rotateYTo(rotateY);
        activeCard.yTo(-10);
        activeCard.scaleTo(1.012);
      }

      if (button) {
        if (!activeButton || activeButton.element !== button) {
          if (activeButton) resetButton(activeButton);
          activeButton = getButtonController(button);
        }

        const { rect } = activeButton;
        const x = pointerX - rect.left - rect.width / 2;
        const y = pointerY - rect.top - rect.height / 2;
        button.style.setProperty("--shine-x", `${pointerX - rect.left}px`);
        activeButton.xTo(x * 0.18);
        activeButton.yTo(y * 0.18);
        activeButton.scaleTo(1.025);
        activeButton.iconXTo?.(5);
        activeButton.iconYTo?.(-2);
        activeButton.iconRotateTo?.(6);
      }
    };

    const onMove = (event: PointerEvent) => {
      pointerX = event.clientX;
      pointerY = event.clientY;
      pointerTarget = event.target as HTMLElement | null;
      if (!moveFrame) moveFrame = requestAnimationFrame(updatePointerEffects);
    };

    const onOut = (event: PointerEvent) => {
      const target = event.target as HTMLElement | null;
      const relatedTarget = event.relatedTarget as Node | null;
      const card = target?.closest<HTMLElement>(".spotlight-card");
      const button = target?.closest<HTMLElement>(".magnetic-button");

      if (card && !card.contains(relatedTarget) && activeCard?.element === card) {
        resetCard(activeCard);
        activeCard = null;
      }

      if (button && !button.contains(relatedTarget) && activeButton?.element === button) {
        resetButton(activeButton);
        activeButton = null;
      }
    };

    const resetActiveEffects = () => {
      if (activeCard) resetCard(activeCard);
      if (activeButton) resetButton(activeButton);
      activeCard = null;
      activeButton = null;
    };

    document.addEventListener("pointermove", onMove, { passive: true });
    document.addEventListener("pointerout", onOut);
    window.addEventListener("scroll", resetActiveEffects, { passive: true });
    window.addEventListener("resize", resetActiveEffects, { passive: true });

    return () => {
      cancelAnimationFrame(moveFrame);
      document.removeEventListener("pointermove", onMove);
      document.removeEventListener("pointerout", onOut);
      window.removeEventListener("scroll", resetActiveEffects);
      window.removeEventListener("resize", resetActiveEffects);
    };
  }, []);

  return null;
}
