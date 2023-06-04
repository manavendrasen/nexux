"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import {
  Form,
  FormField,
  FormItem,
  FormControl,
  FormMessage,
} from "../Form/Form";
import { Input } from "../Input/Input";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "../Button/Button";
import { Edit } from "lucide-react";

type Question = {
  id: number;
  text: string;
  options: string[];
};

interface QuestionProps {
  question: Question;
  index: number;
}

export const ObjectiveQuestion: React.FC<QuestionProps> = ({
  question,
  index,
}) => {
  const [isEditMode, setIsEditMode] = useState(false);
  const [showEditButton, setShowEditButton] = useState(false);
  const formSchema = z.object({
    text: z.string().min(5).max(100),
    option1: z.string().min(3),
    option2: z.string().min(3),
    option3: z.string().min(3),
    option4: z.string().min(3),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      text: question.text,
      option1: question.options[0],
      option2: question.options[1],
      option3: question.options[2],
      option4: question.options[3],
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    console.log(values);
    setIsEditMode(false);
  };

  return (
    <div
      className="px-8 py-4 rounded-sm bg-white border-2 border-slate-200 relative"
      onMouseEnter={() => {
        if (!isEditMode) {
          setShowEditButton(true);
        }
      }}
      onMouseLeave={() => {
        if (!isEditMode) {
          setShowEditButton(false);
        }
      }}
      onClick={() => {
        if (!isEditMode) {
          setIsEditMode(true);
        }
      }}
    >
      {isEditMode ? (
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <FormField
              control={form.control}
              name="text"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="grid grid-cols-2 gap-4 my-4">
              <FormField
                control={form.control}
                name="option1"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="option2"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="option3"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="option4"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="flex justify-between items-center">
              <Button
                variant="secondary"
                onClick={() => {
                  form.reset();
                  setIsEditMode(false);
                }}
              >
                Cancel
              </Button>
              <Button type="submit">Save</Button>
            </div>
          </form>
        </Form>
      ) : (
        <div>
          {showEditButton && (
            <div className="absolute top-3 right-3">
              <Button variant="outline">
                <Edit size={16} className="mr-2" /> Edit
              </Button>
            </div>
          )}
          <div
            className={`
					${showEditButton && "opacity-50"}  
					`}
          >
            <p className="mb-2">{question.text}</p>
            <div className="grid grid-cols-2 gap-2">
              {question.options.map((option, index) => (
                <div key={index} className="flex items-center gap-2">
                  <input
                    disabled
                    type="radio"
                    name={question.id.toString()}
                    value={option}
                  />
                  {option}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
