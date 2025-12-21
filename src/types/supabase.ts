// src/types/supabase.ts
export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json }
  | Json[];

export type Database = {
  public: {
    Tables: {
      profiles: {
        Row: {
          id: string;
          email: string | null;
          plan: string;
          created_at: string;
        };
        Insert: {
          id: string;
          email?: string | null;
          plan?: string;
        };
        Update: {
          plan?: string;
        };
      };
      projects: {
        Row: {
          id: string;
          user_id: string;
          name: string;
          slug: string;
          created_at: string;
        };
        Insert: {
          user_id: string;
          name: string;
          slug: string;
        };
        Update: {
          name?: string;
          slug?: string;
        };
      };
      feedback_submissions: {
        Row: {
          id: string;
          project_id: string;
          rating: number;
          name: string | null;
          message: string | null;
          status: "pending" | "approved" | "ignored";
          created_at: string;
        };
        Insert: {
          project_id: string;
          rating: number;
          name?: string | null;
          message?: string | null;
          status?: "pending" | "approved" | "ignored";
        };
        Update: {
          status?: "pending" | "approved" | "ignored";
        };
      };
    };
    Views: {};
    Functions: {};
    Enums: {};
  };
};
